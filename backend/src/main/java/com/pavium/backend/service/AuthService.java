package com.pavium.backend.service;

import com.pavium.backend.dto.LoginRequest;
import com.pavium.backend.dto.LoginResponse;
import com.pavium.backend.entity.Admin;
import com.pavium.backend.entity.Role;
import com.pavium.backend.repository.AdminRepository;
import com.pavium.backend.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final AdminRepository adminRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    // Register Admin
    public String register(Admin admin) {

        if (adminRepository.existsByEmail(admin.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        admin.setPassword(passwordEncoder.encode(admin.getPassword()));
        admin.setRole(Role.ADMIN);

        adminRepository.save(admin);

        return "Admin Registered Successfully";
    }

    // Login Admin
    public LoginResponse login(LoginRequest request) {

        Admin admin = adminRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new BadCredentialsException("Invalid Email"));

        if (!passwordEncoder.matches(request.getPassword(), admin.getPassword())) {
            throw new BadCredentialsException("Invalid Password");
        }

        String token = jwtService.generateToken(admin.getEmail());

        return LoginResponse.builder()
                .token(token)
                .message("Login Successful")
                .build();
    }
}
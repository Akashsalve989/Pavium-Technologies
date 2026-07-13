package com.pavium.backend.service;

import com.pavium.backend.entity.Admin;
import com.pavium.backend.repository.AdminRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final AdminRepository adminRepository;

    @Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {

        Admin admin = adminRepository.findByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException("Admin Not Found"));

        return new User(
                admin.getEmail(),
                admin.getPassword(),
                List.of(new SimpleGrantedAuthority(admin.getRole().name()))
        );
    }
}
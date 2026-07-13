package com.pavium.backend.controller;

import com.pavium.backend.dto.LoginRequest;
import com.pavium.backend.dto.LoginResponse;
import com.pavium.backend.entity.Admin;
import com.pavium.backend.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @GetMapping("/test")
    public String test() {
        return "Pavium Backend API is Working!";
    }

    @PostMapping("/register")
    public String register(@RequestBody Admin admin) {
        return authService.register(admin);
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        return authService.login(request);
    }
}
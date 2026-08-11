package com.pavium.backend.controller;

import com.pavium.backend.dto.DashboardStats;
import com.pavium.backend.repository.AdminRepository;
import com.pavium.backend.repository.ContactRepository;
import com.pavium.backend.repository.JobApplicationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dashboard")
@RequiredArgsConstructor
public class DashboardController {

    private final ContactRepository contactRepository;
    private final JobApplicationRepository jobRepository;
    private final AdminRepository adminRepository;

    @GetMapping("/stats")
    public DashboardStats getStats() {

        return new DashboardStats(

                contactRepository.count(),

                jobRepository.count(),

                adminRepository.count()

        );

    }

}
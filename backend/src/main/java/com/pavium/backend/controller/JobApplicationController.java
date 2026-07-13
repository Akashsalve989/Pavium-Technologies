package com.pavium.backend.controller;

import com.pavium.backend.entity.JobApplication;
import com.pavium.backend.service.JobApplicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@RestController
@RequestMapping("/api/careers")
@RequiredArgsConstructor
public class JobApplicationController {

    private final JobApplicationService service;

    @PostMapping("/apply")
    public JobApplication apply(
            @RequestParam("fullName") String fullName,
            @RequestParam("email") String email,
            @RequestParam("phone") String phone,
            @RequestParam("position") String position,
            @RequestParam("experience") String experience,
            @RequestParam("resume") MultipartFile resume
    ) throws IOException {

        String uploadDir = "uploads/resumes/";

        File folder = new File(uploadDir);
        if (!folder.exists()) {
            folder.mkdirs();
        }

        String fileName = System.currentTimeMillis() + "_" + resume.getOriginalFilename();

        Path path = Paths.get(uploadDir, fileName);

        Files.copy(resume.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);

        JobApplication application = JobApplication.builder()
                .fullName(fullName)
                .email(email)
                .phone(phone)
                .position(position)
                .experience(experience)
                .resumePath(path.toString())
                .build();

        return service.save(application);
    }

    @GetMapping
    public List<JobApplication> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public JobApplication getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        service.delete(id);
        return "Application Deleted Successfully";
    }
}
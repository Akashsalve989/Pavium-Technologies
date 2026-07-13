package com.pavium.backend.service;

import com.pavium.backend.entity.JobApplication;
import com.pavium.backend.repository.JobApplicationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class JobApplicationService {

    private final JobApplicationRepository repository;

    public JobApplication save(JobApplication application) {
        return repository.save(application);
    }

    public List<JobApplication> getAll() {
        return repository.findAll();
    }

    public JobApplication getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Application not found"));
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
package com.pavium.backend.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "job_applications")
public class JobApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String fullName;

    @Column(nullable = false)
    private String email;

    private String phone;

    private String position;

    private String experience;

    private String resumePath;

    private LocalDateTime appliedAt;

    @PrePersist
    public void onCreate() {
        appliedAt = LocalDateTime.now();
    }

    // No-args constructor
    public JobApplication() {
    }

    // All-args constructor
    public JobApplication(
            Long id,
            String fullName,
            String email,
            String phone,
            String position,
            String experience,
            String resumePath,
            LocalDateTime appliedAt
    ) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.position = position;
        this.experience = experience;
        this.resumePath = resumePath;
        this.appliedAt = appliedAt;
    }

    // Getters
    public Long getId() {
        return id;
    }

    public String getFullName() {
        return fullName;
    }

    public String getEmail() {
        return email;
    }

    public String getPhone() {
        return phone;
    }

    public String getPosition() {
        return position;
    }

    public String getExperience() {
        return experience;
    }

    public String getResumePath() {
        return resumePath;
    }

    public LocalDateTime getAppliedAt() {
        return appliedAt;
    }

    // Setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public void setResumePath(String resumePath) {
        this.resumePath = resumePath;
    }

    public void setAppliedAt(LocalDateTime appliedAt) {
        this.appliedAt = appliedAt;
    }

    // Builder
    public static Builder builder() {
        return new Builder();
    }

    public static class Builder {

        private Long id;
        private String fullName;
        private String email;
        private String phone;
        private String position;
        private String experience;
        private String resumePath;
        private LocalDateTime appliedAt;

        public Builder id(Long id) {
            this.id = id;
            return this;
        }

        public Builder fullName(String fullName) {
            this.fullName = fullName;
            return this;
        }

        public Builder email(String email) {
            this.email = email;
            return this;
        }

        public Builder phone(String phone) {
            this.phone = phone;
            return this;
        }

        public Builder position(String position) {
            this.position = position;
            return this;
        }

        public Builder experience(String experience) {
            this.experience = experience;
            return this;
        }

        public Builder resumePath(String resumePath) {
            this.resumePath = resumePath;
            return this;
        }

        public Builder appliedAt(LocalDateTime appliedAt) {
            this.appliedAt = appliedAt;
            return this;
        }

        public JobApplication build() {
            return new JobApplication(
                    id,
                    fullName,
                    email,
                    phone,
                    position,
                    experience,
                    resumePath,
                    appliedAt
            );
        }
    }
}
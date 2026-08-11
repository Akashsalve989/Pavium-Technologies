package com.pavium.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class DashboardStats {

    private long totalContacts;
    private long totalApplications;
    private long totalAdmins;

}
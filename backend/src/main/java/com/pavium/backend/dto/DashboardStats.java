package com.pavium.backend.dto;

public class DashboardStats {

    private long totalContacts;
    private long totalApplications;
    private long totalAdmins;

    public DashboardStats(
            long totalContacts,
            long totalApplications,
            long totalAdmins
    ) {
        this.totalContacts = totalContacts;
        this.totalApplications = totalApplications;
        this.totalAdmins = totalAdmins;
    }

    public long getTotalContacts() {
        return totalContacts;
    }

    public void setTotalContacts(long totalContacts) {
        this.totalContacts = totalContacts;
    }

    public long getTotalApplications() {
        return totalApplications;
    }

    public void setTotalApplications(long totalApplications) {
        this.totalApplications = totalApplications;
    }

    public long getTotalAdmins() {
        return totalAdmins;
    }

    public void setTotalAdmins(long totalAdmins) {
        this.totalAdmins = totalAdmins;
    }
}
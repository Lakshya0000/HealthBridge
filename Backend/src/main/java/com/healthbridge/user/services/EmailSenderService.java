package com.healthbridge.user.services;

public interface EmailSenderService {
    void sendEmail(String to, String subject, String message);
}

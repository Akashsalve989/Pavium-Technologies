package com.pavium.backend.controller;

import com.pavium.backend.entity.Contact;
import com.pavium.backend.service.ContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService contactService;

    @PostMapping
    public Contact save(@RequestBody Contact contact) {
        return contactService.save(contact);
    }

    @GetMapping
    public List<Contact> getAll() {
        return contactService.getAllContacts();
    }

    @GetMapping("/{id}")
    public Contact getById(@PathVariable Long id) {
        return contactService.getContact(id);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        contactService.deleteContact(id);
        return "Contact Deleted Successfully";
    }
}
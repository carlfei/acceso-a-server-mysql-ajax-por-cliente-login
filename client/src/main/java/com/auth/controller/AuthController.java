package com.auth.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

@RestController
public class AuthController {

	@PreAuthorize("hasRole('ROLE_USER')")
	@GetMapping("/")
	public RedirectView home() {

		RedirectView myRedirectView = new RedirectView();
		myRedirectView.setUrl("https://127.0.0.1:8443");
		return myRedirectView;

	}

}

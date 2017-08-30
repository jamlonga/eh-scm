package com.exciteholidays.scm.web.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.view.RedirectView;

import java.util.HashMap;

@RestController
public class GenericController {
	@RequestMapping(value = {
		"hotel",
		"hotel/{id}/edit",
		"dashboard"
	}, method = RequestMethod.GET)
	public RedirectView generic() {
		return new RedirectView("/index.html", true);
	}
}

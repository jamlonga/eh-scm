package com.exciteholidays.scm.web.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.view.RedirectView;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;

@RestController
public class GenericController {
	@RequestMapping(value = {
		"hotel",
		"hotel/add",
		"hotel/{id}/edit",
		"dashboard"
	}, method = RequestMethod.GET)
	public ModelAndView generic() {
		return new ModelAndView("/index.html");
	}
}

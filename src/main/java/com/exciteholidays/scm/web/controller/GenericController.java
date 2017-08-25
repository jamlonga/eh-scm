package com.exciteholidays.scm.web.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import java.util.HashMap;

@RestController
public class GenericController {
	@RequestMapping(value = {
		"hotel",
		"hotel/{id}",
		"dashboard"
	}, method = RequestMethod.GET)
	public void generic() {
		
	}
}

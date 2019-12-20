package com.dong.web.person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dong.web.util.Printer;

@RestController
@CrossOrigin(origins = "http://localhost:8081")

public class PersonController {
	@Autowired 	private PersonRepository personRepository;
	@Autowired	private Printer p;
	
	@RequestMapping("/")
	public String index() {
		Iterable<Person> all = personRepository.findAll();
		StringBuilder sb = new StringBuilder();
		all.forEach(p -> sb.append(p.getName()+" "));
		return sb.toString();
	}

	@PostMapping("/login")
	public Person login(@RequestBody Person person) {
		p.accept("로그인 진입");
		person.setUserid("wnn");
		p.accept(String.format("id: %s", person.getUserid()));
		p.accept(String.format("pwd: %s", person.getPasswd()));
		return person;
	}
}
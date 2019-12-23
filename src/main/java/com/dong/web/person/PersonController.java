package com.dong.web.person;
import java.util.HashMap;

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
	@Autowired	private Person person;
	
	@RequestMapping("/")
	public String index() {
		Iterable<Person> all = personRepository.findAll();
		StringBuilder sb = new StringBuilder();
		all.forEach(p -> sb.append(p.getName()+" "));
		return sb.toString();
	}

	@PostMapping("/login")
	public HashMap<String, Object> login(@RequestBody Person person) {
		HashMap<String, Object> map = new HashMap<>();
		p.accept("로그인 진입");
		p.accept(String.format("id: %s", person.getUserid()));
		p.accept(String.format("pwd: %s", person.getPasswd()));
		person = personRepository.findByUseridAndPasswd
					(person.getUserid(), person.getPasswd());
		if(person!= null) {
			p.accept("로그인 성공");
			map.put("result","SUCCESS");
			map.put("person",person);
		}else {
			p.accept("로그인 실패");
			map.put("result","FAIL");
			map.put("person",person);
		}
		return map;
	}
	
	@PostMapping("/join")
	public HashMap<String, Object> join(@RequestBody Person person) {
		HashMap<String, Object> map = new HashMap<>();
		
		p.accept(String.format("bday: %s", person.getBirthday()));
		person = personRepository.save(person);
		
		if(person!= null) {
			p.accept("조인 성공");
			map.put("result","SUCCESS");
			map.put("person",person);
		}else {
			p.accept("조인 실패");
			map.put("result","FAIL");
			map.put("person",person);
		}
		return map;
	}
}
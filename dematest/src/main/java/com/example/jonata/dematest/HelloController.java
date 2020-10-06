package com.example.jonata.dematest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @RequestMapping("/")
    public String Maoee() {
        return "Maoeee";
    }    
    
}

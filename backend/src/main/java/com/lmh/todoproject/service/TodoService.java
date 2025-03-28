package com.lmh.todoproject.service;

import com.lmh.todoproject.model.TodoEntity;
import com.lmh.todoproject.persistence.TodoRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class TodoService {
    final TodoRepository repository;

    public List<TodoEntity> create(final TodoEntity entity) {
        return repository.findByUserId(entity.getUserId());
    }

    private void validate(final TodoEntity entity) {
        
    }
}

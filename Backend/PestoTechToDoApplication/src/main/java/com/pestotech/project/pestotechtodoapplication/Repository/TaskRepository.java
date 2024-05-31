package com.pestotech.project.pestotechtodoapplication.Repository;

import com.pestotech.project.pestotechtodoapplication.model.Task;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends MongoRepository<Task, String> {
}

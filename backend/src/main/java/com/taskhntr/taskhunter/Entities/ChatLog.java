package com.taskhntr.taskhunter.Entities;

import javax.persistence.*;

@Entity
@Table(name = "feature_chat")
public class ChatLog {

    @Id
    @Column(name = "chat_id")
    private long chat_id;

}

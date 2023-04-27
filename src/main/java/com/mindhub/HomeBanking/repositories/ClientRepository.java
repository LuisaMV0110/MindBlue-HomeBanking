package com.mindhub.HomeBanking.repositories;

import com.mindhub.HomeBanking.models.Account;
import com.mindhub.HomeBanking.models.Card;
import com.mindhub.HomeBanking.models.CardType;
import com.mindhub.HomeBanking.models.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;
import java.util.Set;


@RepositoryRestResource
public interface ClientRepository extends JpaRepository <Client, Long> {
    Client findByEmail(String email);
}

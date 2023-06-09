package com.mindhub.HomeBanking.services;

import com.mindhub.HomeBanking.dtos.LoanDTO;
import com.mindhub.HomeBanking.models.Loan;

import java.util.List;
import java.util.Optional;

public interface LoanServices {
    Loan findById(long id);
    Loan findByName(String name);
    List<LoanDTO> getLoanDTO();
    void saveLoan(Loan loan);
}

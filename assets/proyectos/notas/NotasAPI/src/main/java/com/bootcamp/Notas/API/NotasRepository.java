package com.bootcamp.Notas.API;

import org.springframework.data.jpa.repository.JpaRepository;

interface NotasRepository extends JpaRepository<Notas, Long> {
}

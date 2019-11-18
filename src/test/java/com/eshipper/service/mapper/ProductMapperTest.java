package com.eshipper.service.mapper;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;

import java.util.UUID;

public class ProductMapperTest {

    private ProductMapper productMapper;

    @BeforeEach
    public void setUp() {
        productMapper = new ProductMapperImpl();
    }

    @Test
    public void testEntityFromId() {
        Long id = UUID.randomUUID().toString();
        assertThat(productMapper.fromId(id).getId()).isEqualTo(id);
        assertThat(productMapper.fromId(null)).isNull();
    }
}

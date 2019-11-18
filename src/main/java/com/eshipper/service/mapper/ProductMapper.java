package com.eshipper.service.mapper;

import com.eshipper.domain.*;
import com.eshipper.service.dto.ProductDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Product} and its DTO {@link ProductDTO}.
 */
@Mapper(componentModel = "spring", uses = {CurrencyMapper.class, UserMapper.class})
public interface ProductMapper extends EntityMapper<ProductDTO, Product> {

    @Mapping(source = "currency.id", target = "currencyId")
    @Mapping(source = "createdByUser.id", target = "createdByUserId")
    ProductDTO toDto(Product product);

    @Mapping(source = "currencyId", target = "currency")
    @Mapping(source = "createdByUserId", target = "createdByUser")
    Product toEntity(ProductDTO productDTO);

    default Product fromId(Long id) {
        if (id == null) {
            return null;
        }
        Product product = new Product();
        product.setId(id);
        return product;
    }
}

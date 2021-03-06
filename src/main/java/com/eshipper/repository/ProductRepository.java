package com.eshipper.repository;
import com.eshipper.domain.Product;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data  repository for the Product entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("select product from Product product where product.createdByUser.login = ?#{principal.preferredUsername}")
    List<Product> findByCreatedByUserIsCurrentUser();

}

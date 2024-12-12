describe('Автотест для покемонов', function () {


    it('Покупка аватара', function () {
    
        cy.visit('https://pokemonbattle.ru/login/'); // Зашел на сайт
        cy.get('input[type="email"]').type('USER_LOGIN'); // Вводим логин 
        cy.get('input[type="password"]').type('USER_PASSWORD');// Вводим пароль 
        cy.get('.auth__button').click(); // Нажать кнопку войти
        cy.get('.header__container > .header__id').click() // Перейти на страницу тренера 
        cy.get('[href="/shop"]').click() // Перейти в раздел покупки аватара
        cy.get('.available > button').first().click({ force: true }); // кликаем Купить у первого доступного аватара
        cy.get('.credit').type('4620869113632996'); // вводим номер карты 
        cy.get('.k_input_ccv').type('125'); // вводим CVV карты
        cy.get('.k_input_date').type('1225'); // вводим срок действия карты
        cy.get('.k_input_name').type('NAME'); // вводим имя владельца действия карты
        cy.get('.pay-btn').click(); // нажимаем кнопку Оплатить
        cy.get('#cardnumber').type('56456'); // вводим код подтверждения СМС
        cy.get('.payment__submit-button').click(); // нажимаем кнопку Отправить
        cy.contains('Покупка прошла успешно').should('be.visible'); // проверяем наличие и видимость сообщения о успешной покупке
    });
});

      
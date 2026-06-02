class MenuLateralPage {
   constructor(page) {
        this.page = page;

    // ==========================
    // MAPEAMENTO DOS ELEMENTOS
    // ==========================
        this.botaoMenu =
        this.page.locator (`[data-test="open-menu"]`);
        
        this.opcaoAllItems =
         this.page.locator ('[data-test="inventory-sidebar-link"]');

   } 




}
describe("Alterar o background da página", () => {
  beforeEach(() => cy.visit("http://localhost:5173/Lessons-Learned/"));

  it("Verifica se o background da página é diferente de 'rgba(0, 0, 0, 0)'", () => {
    cy.get("body").should("not.have.css", "background-color", "rgba(0, 0, 0, 0)");
  });
});

describe("Adicionar um header fixo ao top da página", () => {
  beforeEach(() => cy.visit("http://localhost:5173/Lessons-Learned/"));

  it("verifica se existe um elemento <header>", () => {
    cy.get("header").should("exist");
  });

  it("verifica se o header possui position definido como 'fixed' ou 'sticky'", () => {
    cy.get("header")
      .should("have.css", "position")
      .and("match", /fixed|sticky/);
  });

  it("Verifica se o header possui top igual a '0px'", () => {
    cy.get("header").should("have.css", "top", "0px");
  });
});

describe("Adicionar o título da página dentro do header", () => {
  beforeEach(() => cy.visit("http://localhost:5173/Lessons-Learned/"));

  it("Verifica se há um <h1> dentro do header", () => {
    cy.get("header h1").should("exist");
  });
});

describe("Adicionar uma foto minha à página", () => {
  beforeEach(() => cy.visit("http://localhost:5173/Lessons-Learned/"));

  it("Verifica se a página possui uma tag <img>", () => {
    cy.get("img").should("exist");
  });
});

describe("Adicionar um artigo sobre a minha jornada", () => {
  beforeEach(() => cy.visit("http://localhost:5173/Lessons-Learned/"));

  it("Verifica se existe um elemento <article> na página", () => {
    cy.get("article").should("exist");
  });

  it("Verifica se há um <h2> dentro do article", () => {
    cy.get("article h2").should("exist");
  });

  it("Verifica se o h2 possui o texto 'Minha jornada até aqui'", () => {
    cy.get("article h2").contains("Minha jornada até aqui");
  });

  it("Verifica se o article possui ao menos um parágrafo", () => {
    cy.get("article p").should("exist");
  });
});

describe("Adicionar uma lista de conhecimentos adquiridos", () => {
  beforeEach(() => cy.visit("http://localhost:5173/Lessons-Learned/"));

  it("Verifica se há uma <ul> com id 'learned' dentro de uma section", () => {
    cy.get("section > ul#learned").should("exist");
  });

  it("Verifica se a ul possui pelo menos 3 <li> dentro dela", () => {
    cy.get("ul#learned").find("li").should("have.length.gte", 3);
  });

  it("Verifica se a section possui um <h2> com o texto 'Conhecimentos Adquiridos'", () => {
    cy.get("section > h2").should("exist").contains("Conhecimentos Adquiridos");
  });
});

describe("Adicionar uma lista de conhecimentos a adquuirir", () => {
  beforeEach(() => cy.visit("http://localhost:5173/Lessons-Learned/"));

  it("Verifica se há uma <ul> com id 'to-learn' dentro de uma section", () => {
    cy.get("section > ul#to-learn").should("exist");
  });

  it("Verifica se a ul possui pelo menos 3 <li> dentro dela", () => {
    cy.get("ul#to-learn").find("li").should("have.length.gte", 3);
  });

  it("Verifica se a section possui um <h2> com o texto 'Próximos passos'", () => {
    cy.get("section > h2").should("exist").contains("Próximos passos");
  });
});

describe("Adicionar links para o meu GitHub e o meu LinkedIn", () => {
  beforeEach(() => cy.visit("http://localhost:5173/Lessons-Learned/"));

  it("Verifica se há um link para o GitHub", () => {
    cy.get("a")
      .should("exist")
      .contains("GitHub")
      .and("have.attr", "href")
      .and("match", /https:\/\/www.github.com/);
  });

  it("Verifica se há um link para o GitHub", () => {
    cy.get("a")
      .should("exist")
      .contains("LinkedIn")
      .and("have.attr", "href")
      .and("match", /https:\/\/www.linkedin.com/);
  });
});

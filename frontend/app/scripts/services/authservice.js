'use strict';

/**
 * @ngdoc service
 * @name cursoAngularApp.AuthService
 * @description
 * # AuthService
 * Service in the cursoAngularApp.
 */
angular.module('cursoAngularApp').service('AuthService', function ($http, $location) {

	/** Necessário pois dentro de callbacks de chamadas AJAX o this tem outro escopo */
  var self = this;

  /** Guardará o token a ser enviado a cada requisição ao web service */
  self.token = null;

  /** Guardará a URL que foi acessada e que gerou um redirect para o /login */
  self.redirect = null;

  /** Método responsável por consultar a API para logar o usuário */
  self.login = function(email, password, callback)
  {

    /** Guardará os dados da resposta */
    var response = {};

    /** Faz chamada AJAX à API para efetuado o login */
    $http.post('http://curso-angular-api.app/login', {email: email, password: password})

      /** Em caso de retorno positivo: */
      .success(function(data)
  		{
        /** Armazena o token retornado pela API */
        self.token = data.token;

  			/** Adiciona o header de autorização para a API local */
        self.addAuth();

        /** Determina que a ação de login foi bem sucedida */
        response.result = true;

        /** Informa para qual URL o usuário deve ser encaminhado */
        response.redirect = self.redirect !== null ? self.redirect.substring(1) : '/';

        /** Executa o método de callback passado para este método */
        callback(response);
      })

      /** Em caso de retorno negativo: */
      .error(function()
      {
        /** Determina que a ação de login foi mal sucedidade */
        response.result = false;

        /** Não temos aqui interesse no redirect */
        response.redirect = null;

        /** Executa o método de callback passado para este método */
        callback(response);
  		});
	};

  /** Método responsável por solicitar à API o logout do usuário */
  self.logout = function(callback)
  {
    /** Faz a chamada AJAX à API para fazer o logout  */
    $http.get('http://curso-angular-api.app/logout').success(function()
		{
			/** Seta as propriedade do serviço com seus valores originais */
      self.token = null;
      self.redirect = null;

      /** Executa o método de callback passado para este método */
      callback(true);
		});
	};

  /**
  * Este método encapsula todas as ações que necessitam de login.
  * Recebe como primeiro parametro a URL do recurso que foi acessado, para posterior
  * redirecionamento. O segundo parâmetro é o método de callback que será executado
  * após a determinação de que o token existe.
  */
	self.thisIsProtected = function(redirect, callback)
	{
    /** Seta no serviço o valor passado para redirect */
    self.redirect = redirect;

    /** Se token for nulo, usuário não está logado */
    if(self.token === null)
		{
      /** Redirection para /login */
      $location.path('login');

      /** Encerra a execução */
      return false;
		}

    /** Caso o token exista (usuário está logado), executa o callback passado para o método. */
		callback(self.token);
	};

  /**
  * Algumas APIs não aceitam header de autorização
  * Este método remove o header de $http
  */
  self.removeAuth = function()
  {
    $http.defaults.headers.common.Authorization = undefined;
  };

  /**
  * Adiciona o header de autorização para a API local
  */
  self.addAuth = function()
  {
    $http.defaults.headers.common.Authorization = 'Basic ' + self.token;
  };

});
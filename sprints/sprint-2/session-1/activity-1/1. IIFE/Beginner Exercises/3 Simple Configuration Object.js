const config = (function () {
  // Valores predeterminados de configuración
  const defaults = {
    color: "blue",
    fontSize: "14px",
  };

  // Retornamos un objeto con el método getConfig
  return {
    getConfig: function () {
      return defaults;
    },
  };
})();

console.log(config.getConfig());

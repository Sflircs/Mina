angular.module('minaApp').factory("Instructor", function($resource) {
  return $resource("/Api/Instructor/:id", { id: "@id" }, {
    query: { method: "GET", isArray: true },
    get: { method: "GET", url: '/Api/Instructor/:id', isArray: false },
    add: { method: "POST" },
    update: { method: "PUT", url: '/Api/Instructor/:id' }
  });
});
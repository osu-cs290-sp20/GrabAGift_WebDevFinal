(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['giftTemplate'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"gift\">\n        <div class=\"gift-content\">\n          <img class = \"gift-picture\" src = \""
    + alias4(((helper = (helper = lookupProperty(helpers,"giftURL") || (depth0 != null ? lookupProperty(depth0,"giftURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"giftURL","hash":{},"data":data,"loc":{"start":{"line":3,"column":45},"end":{"line":3,"column":56}}}) : helper)))
    + "\"/>\n\n          <p class=\"gift-description\">\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":6,"column":12},"end":{"line":6,"column":27}}}) : helper)))
    + "\n          </p>\n\n          <p class=\"gift-price\">\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"price") || (depth0 != null ? lookupProperty(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":10,"column":12},"end":{"line":10,"column":21}}}) : helper)))
    + "\n          </p>\n          \n          <p class=\"gift-rating\">\n              "
    + alias4(((helper = (helper = lookupProperty(helpers,"rating") || (depth0 != null ? lookupProperty(depth0,"rating") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rating","hash":{},"data":data,"loc":{"start":{"line":14,"column":14},"end":{"line":14,"column":24}}}) : helper)))
    + "\n          </p>\n        </div>\n      </article>";
},"useData":true});
})();
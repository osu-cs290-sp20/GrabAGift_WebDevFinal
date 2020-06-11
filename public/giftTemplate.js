(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['giftTemplate'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"gift\">\n  <div class=\"gift-content\">\n    <div class=\"gift-items\">\n      <p class=\"gift-description\">\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":5,"column":17}}}) : helper)))
    + "\n      </p>\n\n      <p class=\"gift-price\">\n        $"
    + alias4(((helper = (helper = lookupProperty(helpers,"price") || (depth0 != null ? lookupProperty(depth0,"price") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":9,"column":9},"end":{"line":9,"column":18}}}) : helper)))
    + "\n      </p>\n\n      <p class=\"gift-rating\">\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"rating") || (depth0 != null ? lookupProperty(depth0,"rating") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rating","hash":{},"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":13,"column":18}}}) : helper)))
    + "\n      </p>\n\n      <p class=\"tags\">\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"tags") || (depth0 != null ? lookupProperty(depth0,"tags") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tags","hash":{},"data":data,"loc":{"start":{"line":17,"column":8},"end":{"line":17,"column":16}}}) : helper)))
    + "\n      </p>\n    </div>\n\n    <img class=\"gift-picture\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"image") || (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data,"loc":{"start":{"line":21,"column":35},"end":{"line":21,"column":44}}}) : helper)))
    + "\" />\n  </div>\n</article>";
},"useData":true});
})();
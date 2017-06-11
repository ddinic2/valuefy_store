var applicationItem = {
    tpl: function() {
        var tpl = document.createElement('li');
        tpl.innerHTML = '<div class="application"><div class="img-holder"><a href="application.html?app={{id}}&ProjectToken={{token}}"><img class="img_icon" src="{{image}}"></a></div><a href="application.html?app={{id}}&ProjectToken={{token}}" class="app_link">{{name}}</a><a href="application.html?app={{id}}&ProjectToken={{token}}" class="app_founder"><small>{{category}}</small></a><div data-grade></div>{{grade}}</div>';

        return tpl;
    },
    getNode: function(item, screens, token, vote) {
        var tpl = applicationItem.tpl(),
            grades = ''
        ;
        tpl.innerHTML = tpl.innerHTML.replace(new RegExp('\{\{id\}\}', 'g'), item.id);
        tpl.innerHTML = tpl.innerHTML.replace(new RegExp('\{\{token\}\}', 'g'), token);
        tpl.innerHTML = tpl.innerHTML.replace('{{name}}', item.name);
        tpl.innerHTML = tpl.innerHTML.replace('{{category}}', applicationItem.categoryName(item.category));
        tpl.innerHTML = tpl.innerHTML.replace('{{image}}', screens[0]);
        for(var i=0; i< vote.grade; i++) {
            grades += '<i class="tiny material-icons rate-color-on">grade</i>';
        }
        console.log(grades);
        tpl.innerHTML = tpl.innerHTML.replace('{{grade}}', grades);
        return tpl;
    },
    categoryName: function(category) {
        switch (category){
            case "app": return 'Application';
            case "game": return 'Game';
        }
        return 'unknown';
    }
}
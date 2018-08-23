import app from 'flarum/app';

app.initializers.add('extum/flarum-ext-material', () => {});

// Using JQuery or Ajax is a must
$(".Button-Label").each( function() {
	$(this).text('New')
});

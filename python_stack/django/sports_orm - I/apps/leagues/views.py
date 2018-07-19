from django.shortcuts import render, redirect
from .models import League, Team, Player
from . import team_maker

def index(request):
	context = {
		"leagues": League.objects.all(),
		"baseball_leagues": League.objects.filter(sport="Baseball"),
		"women_leagues": League.objects.filter(name__contains="Women"),
		"hockey_leagues": League.objects.filter(name__contains="Hockey"),
		"not_football_leagues": League.objects.exclude(name__contains="Football"),
		"atlantic_leagues": League.objects.filter(name__contains="Atlantic"),
		"conferences_leagues": League.objects.filter(name__contains="Conference"),
		"dallas_teams": Team.objects.filter(location="Dallas"),
		"raptors_teams": Team.objects.filter(team_name__contains="Raptors"),
		"city_teams": Team.objects.filter(location__contains="City"),
		"T_teams": Team.objects.filter(team_name__startswith="T"),
		"location_teams": Team.objects.order_by('location'),
		"reverse_name_teams": Team.objects.order_by('-team_name'),
		"teams": Team.objects.all(),
		"cooper_players": Player.objects.filter(last_name="Cooper"),
		"joshua_players": Player.objects.filter(first_name="Joshua"),
		"cooper_not_joshua_players": Player.objects.filter(last_name="Cooper").exclude(first_name="Joshua"),
		"alexander_or_wyatt_players": Player.objects.filter(first_name__in=["Alexander", "Wyatt"]),
		"players": Player.objects.all(),
	}
	return render(request, "leagues/index.html", context)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")
using System;
using System.Collections.Generic;
using System.Linq;
using JsonData;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //Collections to work with
            List<Artist> Artists = JsonToFile<Artist>.ReadJson();
            List<Group> Groups = JsonToFile<Group>.ReadJson();

            //========================================================
            //Solve all of the prompts below using various LINQ queries
            //========================================================

            //There is only one artist in this collection from Mount Vernon, what is their name and age?
            // IEnumerable<Artist> MtVernon = Artists.Where(art => art.Hometown == "Mount Vernon");
            IEnumerable<Artist> MtVernon = 
                from art in Artists 
                where art.Hometown == "Mount Vernon" 
                select art;

            foreach(Artist a in MtVernon)
            {
                System.Console.WriteLine($"{a.RealName}, {a.Age}");
            }
            // Earl Simmons, 46

            //Who is the youngest artist in our collection of artists?
            // Artist Youngest = Artists.OrderBy(art => art.Age).FirstOrDefault();
            Artist Youngest =
                (from art in Artists
                orderby art.Age
                select art).FirstOrDefault();

            System.Console.WriteLine($"Youngest: {Youngest.Age}");
            // Youngest: 23

            //Display all artists with 'William' somewhere in their real name
            // IEnumerable<Artist> Williams = Artists.Where(art => art.RealName.ToLower().Contains("william"));
            IEnumerable<Artist> Williams =
                from a in Artists
                where a.RealName.ToLower().Contains("william")
                select a;

            foreach(Artist art in Williams)
            {
                System.Console.WriteLine(art.RealName);
            }
            // Robert Williams, Bryan Williams, William Roberts, William Griffin

            //Display the 3 oldest artist from Atlanta
            //IEnumerable<Artist> OldestFromAtlanta = Artists.Where(art => art.Hometown == "Atlanta").OrderByDescending(art => art.Age).Take(3);
            IEnumerable<Artist> OldestFromAtlanta = 
            (from art in Artists
            where art.Hometown == "Atlanta"
            orderby art.Age descending
            select art).Take(3);

            foreach(Artist art in OldestFromAtlanta)
            {
                System.Console.WriteLine(art.RealName);
            }
            // Jonathan Smith, Andre Benjamin, Christopher Bridges

            //(Optional) Display the Group Name of all groups that have members that are not from New York City
            IEnumerable<string> NotNewYork = Groups.Join(Artists,
                group => group.Id,
                artist => artist.GroupId,
                (group, artist) => 
                {
                    if (artist.Hometown != "New York")
                    {
                        return group.GroupName;
                    }
                    else
                    {
                        return null;
                    }
                }
            ).Distinct();

            foreach(string name in NotNewYork)
            {
                System.Console.WriteLine(name);
            }
            // Wu-Tang Clan, G-Unit, Tribe Called Quest, N.W.A, The Diplomats, D-12, Mobb Deep, Cash Money Millionaires, OutKast, Black Star, Public Enemy

            //(Optional) Display the artist names of all members of the group 'Wu-Tang Clan'
            IEnumerable<string> WuTangMembers = Artists.Join(Groups,
                artist => artist.GroupId,
                group => group.Id,
                (artist, group) =>
                {
                    if (group.GroupName == "Wu-Tang Clan")
                    {
                        return artist.RealName;
                    }
                    else {
                        return null;
                    }
                }
            ).Distinct();

            foreach(string name in WuTangMembers)
            {
                System.Console.WriteLine(name);
            }
            // Robert Diggs, Russell Jones, Corey Woods, Dennis Coles, Jason Hunter, Gary Grice, Clifford Smith
        }
    }
}

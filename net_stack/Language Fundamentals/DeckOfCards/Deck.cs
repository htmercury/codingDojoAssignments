using System;
using System.Collections.Generic;

namespace DeckOfCards
{
    public class Deck
    {
        public List<Card> Cards;

        public Deck()
        {
            Cards = new List<Card>();
            Reset();
        }

        public void Reset()
        {
            string[] suits = {"Hearts", "Clubs", "Diamonds", "Spades"};
            string[] names = {"Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"};
            foreach(string suit in suits) 
            {
                for(int i = 0; i < names.Length; i++) 
                {
                    Cards.Add(new Card(suit, names[i], (i+1).ToString()));
                }
            }
            Shuffle();
        }

        public void Shuffle()
        {
            int n = Cards.Count;
            Random rand = new Random();
            for (int i = 0; i < n; i++)
            {
                int r = i + rand.Next(n - i);
                Card t = Cards[r];
                Cards[r] = Cards[i];
                Cards[i] = t;
            }
        }

        public Card Deal()
        {
            Card deal = Cards[Cards.Count - 1];
            Cards.Remove(deal);
            return deal;
        }
    }
}
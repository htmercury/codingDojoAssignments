using System;
using System.Collections.Generic;

namespace DeckOfCards
{
    public class Player
    {
        public string Name;
        public List<Card> Hand;
        public Deck Cards;

        public Player(string n)
        {
            Name = n;
            Cards = new Deck();
            Hand = new List<Card>();
            for (int i = 0; i < 5; i++)
            {
                Draw();
            }
        }

        public Card Draw()
        {
            Card draw = Cards.Deal();
            Hand.Add(draw);
            return draw;
        }

        public Card Discard(int idx)
        {
            if (idx >= Hand.Count)
            {
                return null;
            }
            else
            {
                Card discard = Hand[idx];
                Hand.Remove(discard);
                return discard;
            }
        }
    }
}
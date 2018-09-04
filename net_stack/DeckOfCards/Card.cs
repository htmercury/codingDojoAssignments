using System;

namespace DeckOfCards
{
    public class Card
    {
        public string StringVal, Suit, Val;

        public Card(string suit, string strValue, string numValue)
        {
            Suit = suit;
            StringVal = strValue;
            Val = numValue;
        }
    }
}
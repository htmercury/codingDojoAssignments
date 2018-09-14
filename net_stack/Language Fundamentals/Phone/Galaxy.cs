namespace Phone {
    public class Galaxy : Phone, IRingable {
        public Galaxy (string versionNumber, int batteryPercentage, string carrier, string ringTone) : base (versionNumber, batteryPercentage, carrier, ringTone) { }
        public string Ring () {
            // your code here
            return $"... {_ringTone} ...";
        }

        public string Unlock () {
            // your code here
            return $"Galaxy {_versionNumber} unlocked with fingerprint scanner";
        }
        public override void DisplayInfo () {
            System.Console.WriteLine("#########################");
            System.Console.WriteLine($"Galaxy {_versionNumber}");
            System.Console.WriteLine($"Battery Percentage: {_batteryPercentage}");
            System.Console.WriteLine($"Carrier: {_carrier}");
            System.Console.WriteLine($"Ring Tone: {_ringTone}");
            System.Console.WriteLine("#########################\n");          
        }
    }
}
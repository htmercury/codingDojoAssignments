using System.Collections.Generic;
using System.Linq;
using Dapper;
using System.Data;
using MySql.Data.MySqlClient;
using LostInTheWoods.Models;

namespace LostInTheWoods.Factory
{
    public class TrailFactory
    {
        private string connectionString;
        public TrailFactory()
        {
            connectionString = "server=localhost;userid=root;password=root;port=3306;database=trailsdb;SslMode=None";
        }
        internal IDbConnection Connection
        {
            get {
                return new MySqlConnection(connectionString);
            }
        }

        public void Add(TrailModel item)
        {
            using (IDbConnection dbConnection = Connection) {
                string query =  "INSERT INTO trails (name, description, length, elevationChange, longitude, latitude) VALUES (@Name, @Description, @Length, @ElevationChange, @Longitude, @Latitude)";
                dbConnection.Open();
                dbConnection.Execute(query, item);
            }
        }
        public IEnumerable<TrailModel> FindAll()
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                return dbConnection.Query<TrailModel>("SELECT * FROM trails");
            }
        }
        public TrailModel FindByID(int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                return dbConnection.Query<TrailModel>("SELECT * FROM trails WHERE id = @Id", new { Id = id }).FirstOrDefault();
            }
        }
    }
}
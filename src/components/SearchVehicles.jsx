const SearchVehicles = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredVehicles, setFilteredVehicles] = useState(vehicleData);
  
    const handleSearch = (query) => {
      setSearchQuery(query);
      const filtered = vehicleData.filter((vehicle) =>
        vehicle.make.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredVehicles(filtered);
    };
  
    const renderVehicle = ({ item }) => (
      <View style={styles.vehicleContainer}>
        {/* Aca renderizó los detalles del vehículo */}
      </View>
    );
  
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar vehículos"
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <FlatList
          data={filteredVehicles}
          renderItem={renderVehicle}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    // Luis aqui estilos para el componente SearchVehicles
  });
  
  export default SearchVehicles;
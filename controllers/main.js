const Property = require("../models/Property");
const apiBaseUrl = 'https://api.datapartners.com/v2/demographics?'
const apiKey = process.env.API_KEY

module.exports = {
  // Update demographic data for a single property
    updateDemographics: async (req, res) => {
      try {
        const latitude = req.params.latitude;
        const longitude = req.params.longitude;
    
        const apiUrl = `${apiBaseUrl}lat=${latitude}&lng=${longitude}&key=${apiKey}`;
    
        const response = await fetch(apiUrl);
    
        if (!response.ok) {
          throw new Error(`Error fetching demographic data from API: ${response.statusText}`);
        }
    
        const data = await response.json();
        
        const property = await Property.findOneAndUpdate({ latitude, longitude }, { $set: { demographicData: data }}, { new: true });
    
        res.send(property);
      } catch (err) {
        res.status(500).send(`Error fetching demographic data from API: ${err.message}`);
      }
    },
    // Update demographic data of all properties in database
    updateAllDemographics: async (req, res) => {
      try {
        const properties = await Property.find({});
    
        for (const property of properties) {
          const apiUrl = `${apiBaseUrl}lat=${property.latitude}&lng=${property.longitude}&key=${apiKey}`;
    
          const response = await fetch(apiUrl);
    
          if (!response.ok) {
            throw new Error(`Error fetching demographic data from API: ${response.statusText}`);
          }
    
          const data = await response.json();
    
          property.demographicData = data;
          await property.save();
        }
    
        res.send('Demographic data has been updated for all properties');
      } catch (err) {
        res.status(500).send(`Error updating demographic data for properties: ${err.message}`);
      }
    },
};

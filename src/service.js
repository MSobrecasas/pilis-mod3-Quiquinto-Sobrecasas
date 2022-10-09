export const getClima = async (latitude, longitude) => {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${latitude}&longitude=${longitude}&longitude%7d&timezone=America/Argentina/Jujuy`);
        return response.json();
    } catch {
        throw new Error('could not fetch clima');
    }
};
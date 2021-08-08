const pokemonColorByType = (type) => {
  switch (type) {
    case 'rock':
        return rgb(247, 247, 247)
      break;
      case 'ghost':
        return  rgb(247, 247, 247)
      break;
      case 'electric':
        return rgb(255, 255, 161)
      break;
      case 'bug':
        return '#F6D6A7'
      break;
      case 'poison':
        return '#e0a7f6'
      break;
      case 'normel':
        return '#f4f4f4'
      break;
      case 'fairy':
        return rgba(255, 192, 203, 0.863)
      break;
      case 'fire':
        return '#FBE3DF'
      break;
      case 'grass':
        return '#E2F9E1'
      break;
      case 'water':
        return  '#E0F1FD'
      break;
    default:
      break;
  }
}

export default pokemonColorByType;

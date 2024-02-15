import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = ({ item }) => {
  // Verificar si item es null antes de intentar acceder a sus propiedades
  if (!item) {
    return <div>Cargando...</div>; // O cualquier otro indicador de carga que desees mostrar
  }

  return (
    <div style={{ display: "flex" }}>
      <img
        src={item.img}
        alt={item.title}
        style={{
          marginRight: "20px",
          width: "200px",
          height: "auto",
          border: "2px solid black", // Agregamos el borde negro
        }}
      />
      <div>
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>{item.title}</h2>
        <p style={{ marginBottom: "10px" }}>{item.description}</p>
        <p style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>Price: ${item.price}</p>
        <CounterContainer stock={item.stock} />
      </div>
    </div>
  );
};

export default ItemDetail;

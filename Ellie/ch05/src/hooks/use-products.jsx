export default function useProducts() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("🔥 뜨끈한 데이터를 네트워크에서 받아옴");
        setProducts(data);
      })
      .catch((err) => setError("에러가 발생했음"))
      .finally(() => setLoading(false));

    return () => {
      console.log("🧹 깨끗하게 청소하는 일을 합니다.");
    };
  }, [checked]);
}

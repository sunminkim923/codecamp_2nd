import ProductDetail from "../../../src/components/units/market/detail/detail.container";
import CommentWrite from "../../../src/components/units/market/commentwrite/commentwrite.container";
import CommentList from "../../../src/components/units/market/commentlist/commentlist.container";

export default function ProductDetailPage() {
  return (
    <>
      <ProductDetail />
      <CommentWrite />
      <CommentList />
    </>
  );
}

<div class="content d-flex flex-column flex-column-fluid pt-0">
    <!--begin::Post-->
    <div class="post d-flex flex-column-fluid" id="kt_post">
        <!--begin::Container-->
        <div id="kt_content_container" class="container">
            <!--begin::Card-->
            <div class="card">
                <!--begin::Card header-->
                <div class="card-header border-0 pt-6">
                    <!--begin::Card title-->
                    <div class="card-title">
                        <!--begin::Search-->
                        Transcript
                        <!--end::Search-->
                    </div>
                    <!--begin::Card title-->
                </div>
                <!--end::Card header-->
                <!--begin::Card body-->
                <div class="card-body pt-0">
                    <table class="table align-middle table-row-dashed fs-6 gy-5" id="transcript_table">
                        <thead>
                        <tr class="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                            <th class="d-none">Disease ID</th>
                            <th>Medicine Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Sub Total</th>
                        </tr>
                        </thead>
                        <tbody>

                        </tbody>
                        <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Grand Total</td>
                            <td>$<span id="grand_total">0</span></td>
                        </tr>
                        </tfoot>
                    </table>
                </div>
                <!--end::Card body-->
            </div>
            <!--end::Card-->
        </div>
        <!--end::Container-->
    </div>
    <!--end::Post-->
</div>
@section('script')
    <script>
        // handle submit event of form
        $('.disease_id').on('change', function () {
            var disease_id = this.value;
            if ($('#disease_' + disease_id).is(':checked')) {
                var CSRF_TOKEN = '{{ csrf_token() }}';
                // change login button text before ajax
                $.post("{{route('generate_transcript')}}", {
                    _token: CSRF_TOKEN,
                    disease_id: disease_id
                }).done(function (response) {
                    console.log(response)
                    addTableRow(response, disease_id)
                }).fail(function (response) {
                    console.log(error)
                });
            } else {
                removeTableRow(disease_id)
            }
        });

        function addTableRow(response, diseaseId) {
            if (response.status) { // If success then redirect to login url
                var html = '';
                html += '<tr id="table_' + diseaseId + '">';
                html += '<td>' + response.data.product.name + '</td>';
                html += '<td>$<span class="amount" id="amount_' + diseaseId + '">' + response.data.product.amount + '</span></td>';
                html += '<td><input type="number" class="quantity" min="1" id="quantity_' + diseaseId + '" value="1" name="quantity" placeholder="Enter Quantity"></td>';
                html += '<td>$<span class="sub_total" id="sub_total_' + diseaseId + '">' + response.data.product.amount + '</span></td>';
                html += '</tr>';
                $("#transcript_table tbody").append(html);
            }
            grandTotal();
        }

        $('body').on('change', '.quantity', function () {
            var str = $(this).closest('tr').attr('id');
            var quantity = str.replace(/table_/g, '');
            subTotal(quantity)
        });

        function subTotal(quantity) {
            var total_quantity = $('#quantity_' + quantity).val();

            total_quantity = parseInt(total_quantity);
            var price = $('#amount_' + quantity).text();
            price = parseFloat(price);
            var sub_price = total_quantity*price;
            console.log(sub_price)
            $('#sub_total_'+quantity).text(sub_price);
            grandTotal();
        }

        function grandTotal() {
            var sum = 0;
            $('.sub_total').each(function () {
                var amount = parseFloat($(this).text());
                if (!isNaN(amount)) {
                    sum += amount;  // Or this.innerHTML, this.innerText
                }
            });
            $('#grand_total').text(sum)
            return sum;
        }

        function removeTableRow(disease_id) {
            $('#transcript_table').each(function () {
                var tablerow = $(this).find("#table_" + disease_id).closest("tr").remove();
            });
            grandTotal();
        }
    </script>
@endsection

<!DOCTYPE html>
<html>
@include('layouts.partials.htmlheader')

<body>
    @include('layouts.partials.navbar')
    @yield('main-content')
    @include('layouts.partials.footer')
    @yield('body-scripts')
    <script>
        setActivePage('{{ $page }}');
    </script>
</body>

</html>
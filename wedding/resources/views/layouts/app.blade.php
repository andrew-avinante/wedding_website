<!DOCTYPE html>
<html>
@include('layouts.partials.htmlheader')

<body>
    <div id='app'>
        @include('layouts.partials.navbar')
        @yield('main-content')
    </div>
    @include('layouts.partials.footer')
    @yield('body-scripts')
    <script>
        setActivePage('{{ $page }}');
    </script>
</body>

</html>